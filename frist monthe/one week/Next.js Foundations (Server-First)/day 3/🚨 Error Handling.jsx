"use server";

export async function createPost(formData: FormData) {
  try {
    const title = formData.get("title");

    if (!title) {
      throw new Error("Title required");
    }

    await db.post.create({
      data: { title }
    });

  } catch (err) {
    return { error: err.message };
  }
}


// وفي form:

const action = createPost;

<form action={async (formData) => {
  const result = await action(formData);

  if (result?.error) {
    alert(result.error);
  }
}}>
  <input name="title" />
  <button type="submit">Save</button>
</form>
