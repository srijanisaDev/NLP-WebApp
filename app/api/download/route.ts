import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file specified" }, { status: 400 });
  }

  const safeName = path.basename(file);
  const filePath = path.join(process.cwd(), "public", "datasets", safeName);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  const ext = path.extname(safeName).toLowerCase();

  const mimeTypes: Record<string, string> = {
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".txt": "text/plain",
    ".zip": "application/zip",
    ".csv": "text/csv",
  };

  const contentType = mimeTypes[ext] ?? "application/octet-stream";

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${safeName}"`,
    },
  });
}
