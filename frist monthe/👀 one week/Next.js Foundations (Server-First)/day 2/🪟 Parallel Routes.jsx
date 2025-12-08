// 🪟 3) Parallel Routes
// 🎯 الفكرة:
// تعرض أكتر من Route في نفس الصفحة.

// زي:

// 🧱 Component A
// 🧱 Component B
// 🧱 Component C

// كل واحد Route لوحده.

// 📁 مثال:

// app/
//   layout.tsx
//   @feed/page.tsx
//   @notifications/page.tsx
//   @messages/page.tsx



  export default function Layout({ feed, notifications, messages }) {
  return (
    <div className="grid">
      {feed}
      {notifications}
      {messages}
    </div>
  );
}


// 🧠 URL يكون كده
// /(@feed,@notifications,@messages)
// لوحده كل Route في نفس الصفحة.
// ممكن تدخل على كل واحد فيهم لوحده
// كده
// /(@feed):