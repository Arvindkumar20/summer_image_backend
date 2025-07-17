import axios from "axios";

// 🎨 Generate image using ImagePig API
const generate = async (prompt) => {
  try {
    // Define ImagePig API URL and Payload
    const apiUrl = "https://api.imagepig.com/xl";
    const payload = {
      prompt,
    };

    // Make API request to ImagePig
    const response = await axios.post(apiUrl, payload, {
      headers: {
        "Api-Key": process.env.IMAGEPIG_API_KEY, // Your ImagePig API key
        "Content-Type": "application/json",
      },
    });

    // ✅ Validate the response and return base64 data
    if (response.status === 200 && response.data?.image_data) {
      return `data:image/png;base64,${response.data.image_data}`;
    } else {
      console.error("⚠️ ImagePig API did not return valid image data");
      return null;
    }
  } catch (error) {
    console.error("❌ Error generating image with ImagePig API:", error.message);
    return null;
  }
};

export default generate;
