find . -name "*.webp" -exec bash -c 'file="{}"; npx @squoosh/cli --webp '{"quality":75}' "$file"' \;
