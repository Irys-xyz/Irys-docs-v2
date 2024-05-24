function findSnippetsAroundKeywords(text: string, keywords: string): string {
  // Split the keywords string into an array of individual keywords
  const individualKeywords: string[] = keywords.split(" ").filter(Boolean);

  // Adjust CHARACTER_AROUND based on the number of keywords
  const CHARACTER_AROUND: number = individualKeywords.length > 1 ? 10 : 50;

  let snippets: string[] = [];

  individualKeywords.forEach((keyword) => {
    const lowerText: string = text.toLowerCase();
    const lowerKeyword: string = keyword.toLowerCase();

    let startIndex: number = lowerText.indexOf(lowerKeyword);
    while (startIndex !== -1) {
      // Calculate start and end positions for the snippet
      let snippetStart: number = Math.max(startIndex - CHARACTER_AROUND, 0);
      let snippetEnd: number = Math.min(
        startIndex + keyword.length + CHARACTER_AROUND,
        text.length
      );

      // Determine whether ellipses should be added before/after the snippet
      let snippetPrefix: string = snippetStart > 0 ? "..." : "";
      let snippetSuffix: string = snippetEnd < text.length ? "..." : "";

      // Extract the snippet
      let snippet: string = text.substring(snippetStart, snippetEnd);

      // Highlight the keyword within the snippet
      snippet = snippet.replace(
        new RegExp(keyword, "gi"),
        (match: string) => `<b class="font-bold"><u>${match}</u></b>`
      );

      // Add the snippet to the list, with highlighted keyword
      snippets.push(snippetPrefix + snippet + snippetSuffix);

      // Find the next occurrence of the keyword
      startIndex = lowerText.indexOf(lowerKeyword, startIndex + keyword.length);
    }
  });

  // Merge overlapping or consecutive snippets
  let mergedSnippets: string[] = mergeSnippets(snippets);

  return mergedSnippets.join(" ");
}

function mergeSnippets(snippets: string[]): string[] {
  if (snippets.length < 2) return snippets;

  let merged: string[] = [snippets[0]];
  for (let i = 1; i < snippets.length; i++) {
    let lastMerged: string = merged[merged.length - 1];
    let current: string = snippets[i];

    // Check if the current snippet overlaps or is immediately consecutive to the last merged snippet
    if (lastMerged.endsWith("...") && current.startsWith("...")) {
      merged[merged.length - 1] = lastMerged + current.substring(3);
    } else {
      merged.push(current);
    }
  }
  return merged;
}
export { findSnippetsAroundKeywords };
