function extractVisibleText(mdString: string) {
  // Simplify tables but keep the content
  mdString = mdString.replace(/\|.*?\|/g, (match: string) => {
    return match.replace(/^\||\|$/g, "").replace(/\|/g, " ");
  });

  // Extract alt text from images
  mdString = mdString.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1");

  // Extract and replace links with text only
  mdString = mdString.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");

  // Remove inline code blocks
  mdString = mdString.replace(/`([^`]+)`/g, "$1");

  // Remove code blocks
  mdString = mdString.replace(/```[\s\S]*?```/g, "");

  mdString = mdString.replace(/\|/g, "");

  // remove -
  mdString = mdString.replace(/-/g, "");

  // Remove emphasis (bold, italics)
  mdString = mdString.replace(/(\*\*|__)(.*?)\1/g, "$2"); // Bold
  mdString = mdString.replace(/(\*|_)(.*?)\1/g, "$2"); // Italics

  // Remove headers
  mdString = mdString.replace(/^#+\s+(.*)/gm, "$1");

  // Remove blockquotes
  mdString = mdString.replace(/^>\s+(.*)/gm, "$1");

  // Remove list markers
  mdString = mdString.replace(/^\s*[*\-+]\s+(.*)/gm, "$1");
  mdString = mdString.replace(/^\s*\d+\.\s+(.*)/gm, "$1");

  // Remove emojis
  mdString = mdString.replace(
    /[\u231A-\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA-\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614-\u2615\u2618\u261D\u2620\u2622-\u2623\u2626\u262A\u262E-\u262F\u2638-\u263A\u2640-\u2642\u2648-\u2653\u2660-\u2661\u2663-\u2665\u2668\u267B\u267F\u2692-\u269C\u26A0-\u26A1\u26AA-\u26AB\u26B0-\u26B1\u26BD-\u26BE\u26C4-\u26C5\u26C8\u26CE-\u26CF\u26D1\u26D3-\u26D4\u26E9-\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u2721\u2728\u2733-\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934-\u2935\u2B05-\u2B07\u2B1B-\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\uD83E[\uDD00-\uDDFF]|\u200D|\uFE0F/g,
    ""
  );

  // Optional: Remove any extra whitespace characters
  mdString = mdString.replace(/\s+/g, " ").trim();

  return mdString;
}

export default extractVisibleText;
