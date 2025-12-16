import { atom } from 'jotai';


// 🧩 Step 1: Atom بسيطة (Search)
export const searchAtom = atom(''); // as store value
// 🧩 Step 2: Atom تانية (Category)
export const CategoryAtom = atom('all'); // as store value
export const PriceRangeAtom = atom([0, 5000]); // as store value    


// 🧩 Step 3: Atom للـ data (Mock)
export const productsAtom = atom([
    { id: 1, name: "iPhone", category: "mobile", price: 1000 },
    { id: 2, name: "MacBook", category: "laptop", price: 2000 },
    { id: 3, name: "Samsung", category: "mobile", price: 900 },
]);



// 🧠 Step 4: Derived Atom (هنا القوة 💥)

export const filteredProductsAtom = atom((get) => {
    const search = get(searchAtom).toLowerCase();
    const category = get(CategoryAtom);
    const products = get(productsAtom);
    return products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(search);
        const matchesCategory = category === 'all' || product.category === category;
        const [minPrice, maxPrice] = get(PriceRangeAtom);
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        return matchesSearch && matchesCategory && matchesPrice;

    });

});

//     🧠 افهم اللي حصل:
// atom بتعتمد على atoms تانية
// أي تغيير في search أو category
// ➡️ يعيد الحساب تلقائيًا
// 🔥 من غير useEffect
// 🔥 من غير useMemo
// 🔥 من غير Redux selectors