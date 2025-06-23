# scripts/preview-redact.ps1

# Redact raw notes into content/notes/
py scripts/redact-all.py
if ($LASTEXITCODE -ne 0) {
    Write-Error "Redaction failed. Aborting preview."
    exit 1
}

# Start local Hugo server
hugo server --disableFastRender --cleanDestinationDir --gc --logLevel debug
