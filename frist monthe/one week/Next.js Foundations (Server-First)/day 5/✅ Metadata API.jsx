// ✅ 1) Metadata API
// 🎯 الهدف
// تتحكم في:
// title
// description
// OG tags (sharing)
// canonical
// robots

// وده مهم جدًا في الـ SEO و sharing preview.



// 📌 الشكل الأساسي:
export const metadata = {
    title: "Products",
    description: "Browse our products",
};


// 🧠 Dynamic metadata:
export async function generateMetadata({ params }) {
    const product = await getProduct(params.id);

    return {
        title: product.name,
        description: product.description,
    };
}




















