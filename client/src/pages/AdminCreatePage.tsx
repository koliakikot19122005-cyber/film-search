import AdminSideBar from '../components/AdminSideBar.tsx'

export default function AdminCreatePage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    //Відправити зібрані данні на сервер через lib/api.tsx (POST запит)
    //на стороні сервера приййняти данні
  }
  return (
    <div className="main-container">
      <AdminSideBar />
      <h1>Admin Create Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Description:
          <textarea name="description" />
        </label>
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}
