import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0faf0",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "2rem",
    }}>

      <h1 style={{ fontSize: 120, fontWeight: 800, color: "#2d7a2d", margin: 0, lineHeight: 1 }}>
        404
      </h1>

      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a5c1a", margin: "16px 0 8px" }}>
        Page Not Found
      </h2>

      <p style={{ fontSize: 16, color: "#5a8a5a", marginBottom: 32 }}>
        This page has wandered off. Let&apos;s get you back.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" style={{
          background: "#2d7a2d",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 15,
        }}>
          Go Home
        </Link>

        <Link href="/animals" style={{
          background: "#fff",
          color: "#2d7a2d",
          border: "2px solid #2d7a2d",
          padding: "12px 28px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 15,
        }}>
          Browse Animals
        </Link>
      </div>
    </div>
  );
}