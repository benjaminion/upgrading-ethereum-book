#!/usr/bin/gawk -f

NR == 1 {
    lm2 = $0
}

NR == 2 {
    lm1 = $0
}

NR > 2 {
    if ($0 ~ /^def /) {
        f = gensub(/^def ([^(]+).+$/, "\\1", "1")
        print "\n<a id=\"def_" f "\"></a>"
    }
    print lm2
    lm2 = lm1
    lm1 = $0
}

END {
    print lm2
    print lm1
}
