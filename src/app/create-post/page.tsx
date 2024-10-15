"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { ImagePlus } from "lucide-react";
import { useEdgeStore } from "@/utils/edgestore";
import createPost from "../actions/create-post.action";

export default function CreatePostPage() {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const { edgestore } = useEdgeStore();

  return (
    <>
      <form className="flex flex-col items-center justify-center min-h-screen mx-auto p-4">
        <Input
          type="file"
          onChange={(e) => {
            setFile(e.target.files?.[0] || null);
          }}
        />

        <div className="grid gap-2 mb-4">
          <Label htmlFor="caption">Caption</Label>
          <Textarea
            id="caption"
            placeholder="Write a caption..."
            className="border rounded-md p-2"
            name="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>

        <Button
          className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          onClick={async (e) => {
            e.preventDefault();
            console.log("Button clicked");
            if (file && caption) {
              console.log("File and caption are set");
              const res = await edgestore.publicFiles.upload({
                file,
              });
              console.log("Upload response:", res);
              await createPost(res.url, caption);
            } else {
              console.log("Please fill all fields and select an image");
            }
          }}
        >
          Share
        </Button>
      </form>
    </>
  );
}

// -"use client";

// import { useState } from "react";
// import { Button } from "../../components/ui/button";

// import { Input } from "../../components/ui/input";
// import { Label } from "../../components/ui/label";
// import { Textarea } from "../../components/ui/textarea";
// import { ImagePlus } from "lucide-react";
// import { useEdgeStore } from "@/utils/edgestore";
// import createPost from "../actions/create-post.action";

// export default function CreatePostPage() {
//   const [image, setImage] = useState<string | null>(null);
//   const [caption, setCaption] = useState("");
//   const { edgestore } = useEdgeStore();

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <form className="flex flex-col items-center justify-center min-h-screen mx-auto p-4">
//       <div className="mb-4">
//         {image ? (
//           <img
//             src={image}
//             alt="Uploaded"
//             className="w h-64 object-cover rounded-md shadow-lg"
//           />
//         ) : (
//           <div className="border-2 border-dashed border-stone-500 rounded-md p-4 text-center hover:border-stone-700 transition duration-200">
//             <Label htmlFor="picture" className="cursor-pointer">
//               <ImagePlus className="mx-auto h-12 w-12 text-stone-400" />
//               <span className="mt-2 block text-sm font-semibold text-gray-900">
//                 Upload a photo
//               </span>
//             </Label>
//             {/* <Input
//               id="picture"
//               type="file"
//               accept="image/*"
//               className="sr-only"
//               onChange={handleImageUpload}
//               name="image"
//             /> */}
//             <Input
//               type="file"
//               onChange={(e) => {
//                 setFile(e.target.files?.[0] || null);
//               }}
//             />
//           </div>
//         )}
//       </div>
//       <div className="grid gap-2 mb-4">
//         <Label htmlFor="caption">Caption</Label>
//         <Textarea
//           id="caption"
//           placeholder="Write a caption..."
//           className="border rounded-md p-2"
//           name="caption"
//           value={caption}
//           onChange={(e) => setCaption(e.target.value)}
//         />
//       </div>

//       <Button
//         className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
//         onClick={async () => {
//           if (image && caption) {
//             const res = await edgestore.publicFiles.upload({
//               file,
//             });
//             await createPost(res.url, caption);
//           } else {
//             console.log("Please fill all fields and select an image");
//           }
//         }}
//       >
//         Share
//       </Button>
//     </form>
//   );
// }
