import Link from "next/link";

export default function ColabBadge({ url }: { url: string }) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-500 text-sm px-4 py-2 rounded-md hover:bg-orange-500/20 transition-colors font-medium">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
      </svg>
      Run in Google Colab ↗
    </Link>
  );
}
