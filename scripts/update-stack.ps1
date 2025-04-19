#!/usr/bin/env pwsh
# scripts/update-stack.ps1
# Fetches tool versions and writes them to data/stack.json

# 1. Hugo version (e.g. “v0.136.5”)
$hugoVer = (hugo version | Select-String 'v\d+(\.\d+)*' | ForEach { $_.Matches[0].Value })

# 2. Git version (e.g. “2.38.1.windows.1”)
$gitVer = (& git --version).Split(' ')[2]

# 3. KaTeX version (prepend “v” if needed)
$katexRaw = try { (& npm view katex version).Trim() } catch { "N/A" }
if ($katexRaw -ne "N/A" -and -not $katexRaw.StartsWith('v')) {
    $katexVer = "v$katexRaw"
} else {
    $katexVer = $katexRaw
}

# Build the hashtable
$stack = @{
    Hugo  = $hugoVer
    Git   = $gitVer
    KaTeX = $katexVer
}

# Output to JSON for Hugo’s data dir
$stack | ConvertTo-Json -Depth 1 | Out-File -FilePath "data/stack.json" -Encoding utf8
