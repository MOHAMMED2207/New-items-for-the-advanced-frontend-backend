// 🟥 Intercepted Routes

// 🎯 الفكرة في جملة واحدة:
// بتفتح صفحة جديدة فوق الصفحة اللي إنت فيها، بدون ما تسيب الصفحة الأصلية.

// يعني:
// مش Navigation
// مش Redirect
// إنت لسه في نفس المكان
// بس فتحت View تاني فوقه

// زي:

// 🟦 Facebook
// لما تفتح صورة على Feed
// انت على /home
// بتفتح /post/22
// لكن انت لسه technically في /home
// الخلفية موجودة
// popup فوقها

// ده اسمه Intercepted Route


// app/
//   feed/
//     page.tsx

//   (.)post/[id]/
//     page.tsx



// 🖼 صفحة الـ Gallery
import Link from "next/link";
export default function Gallery() {
  const images = [
    { id: "1", src: "/img1.jpg" },
    { id: "2", src: "/img2.jpg" },
    { id: "3", src: "/img3.jpg" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img) => (
        <Link
          key={img.id}
          href={`/image/${img.id}`}
        >
          <img
            src={img.src}
            className="w-full rounded cursor-pointer"
          />
        </Link>
      ))}
    </div>
  );
}



// 🟥 صفحة الصورة كـ Modal (Intercepted)

// 📁 (.)image/[id]/page.tsx

"use client";

export default function ImageModal({ params }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white p-4 rounded-xl">
        <img
          src={`/img${params.id}.jpg`}
          className="max-w-[80vw] max-h-[80vh]"
        />

        <button
          onClick={() => history.back()}
          className="mt-3 py-2 px-4 bg-gray-200 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
