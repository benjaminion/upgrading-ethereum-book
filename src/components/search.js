import React from 'react'
import { graphql, useStaticQuery, Link, withPrefix } from 'gatsby'

import "../css/search.css"

const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const getSearchResults = (query, data) => {

  if (query.searchText.length < 3) {
    return []
  }

  // Match the starts of words only. The "d" flag gives us the matching indices.
  const regex = RegExp('(^|\\s|_|\\()' + escapeRegExp(query.searchText), 'gd' + (query.isCaseSensitive ? '' : 'i'))

  const result = data.map( (page) => {

    let score = 0
    const matches = []
    for (let i = 0; i < page.chunks?.length; i++) {

      let chunk = page.chunks[i]
      let match
      const indices = []
      while ((match = regex.exec(chunk.text)) !== null) {
        // Remove whitespace from start of match, except at the very beginning of the string.
        indices.push([match.indices[0][0] === 0 ? 0 : match.indices[0][0] + 1, match.indices[0][1]])
      }
      if (indices.length > 0) {
        matches.push(
          {
            type: chunk.type,
            label: chunk.label,
            id: chunk.id,
            text: chunk.text,
            indices: indices,
          }
        )
        score += indices.length
      }
    }

    return matches.length === 0 ? null : {
      url: page.path,
      title: page.title,
      matches: matches,
      score: score,
    }
  })

  return result.filter(x => x !== null).sort((a, b) => (b.score - a.score))
}

const Search = () => {

  const queryData = useStaticQuery(graphql`
    query {
      mySearchData {
        data
      }
    }
  `)

  const searchData = queryData.mySearchData.data

  const [searchQuery, setQuery] = React.useState({
    searchText: '',
    isCaseSensitive: false,
  })

  const setSearchText = (text) => {
    setQuery(previousState => {
      return { ...previousState, searchText: text }
    });
  }

  const toggleIsCaseSensitive = () => {
    setQuery(previousState => {
      return { ...previousState, isCaseSensitive: !previousState.isCaseSensitive }
    });
  }
  
  const results = getSearchResults(searchQuery, searchData)

  const pages = results.map((result) => {
    const chunks = result.matches.map((match) => {
      const matches = match.indices.map((indices, i) => {
        return [
          match.text.substring((i === 0) ? 0 : match.indices[i-1][1], indices[0]),
          <span className='match-text'>
            {match.text.substring(indices[0], indices[1])}
          </span>,
          (i === match.indices.length -1) ? match.text.substring(indices[1]) : '',
        ]
      })
      return (
          <li key={result.url + match.id}>
            <Link
              href={withPrefix(result.url + '#' + match.id)}
              className="label"
              target="_blank"
            >
              {match.label}
            </Link>
            <span className={'chunk-text ' + match.type}>
              {matches}
            </span>
          </li>
      )
    })
    return (
        <li key={result.url}>
          <Link href={withPrefix(result.url)} target="_blank">{result.title}</Link>
          <ul>
            {chunks}
          </ul>
        </li>
    )
  })

  return (
    <div id="search-page">
      <div id="search-parameters">
        <input
          name="searchText"
          id="search-text"
          value={searchQuery.searchText}
          placeholder='Search'
          onChange={(event) => setSearchText(event.target.value)}
        />
        <span id="checkbox">
          <input
              type="checkbox"
              id="is-case-sensitive"
              checked={searchQuery.isCaseSensitive}
              onChange={toggleIsCaseSensitive}
          />
          <label htmlFor="is-case-sensitive">Case sensitive</label>
        </span>
      </div>
      <div id="search-results">  
        {results.length > 0 ? (
          <ul>
            {pages}
          </ul>
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  )
}

export default Search
