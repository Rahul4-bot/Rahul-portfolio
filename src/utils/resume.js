export const resumeUrl = `${import.meta.env.BASE_URL}assets/Rahul_Pareek_Resume.pdf`;

export async function openResume(event) {
  event.preventDefault();

  try {
    const response = await fetch(resumeUrl, { method: "HEAD", cache: "no-store" });
    if (!response.ok) throw new Error("Resume PDF is unavailable");

    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  } catch {
    window.alert("The resume PDF is currently unavailable. Please try again later or contact Rahul Pareek directly.");
  }
}
