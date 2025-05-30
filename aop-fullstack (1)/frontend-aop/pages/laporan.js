
import { useEffect, useState } from "react";
import API from "../lib/api";

export default function Laporan() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ nama_laporan: "", deskripsi: "", tanggal: "" });

  const fetchData = async () => {
    const res = await API.get("/laporan");
    setData(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/laporan", form);
    fetchData();
  };

  const handleDelete = async (id) => {
    await API.delete(`/laporan/${id}`);
    fetchData();
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Laporan</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nama" onChange={(e) => setForm({ ...form, nama_laporan: e.target.value })} />
        <input placeholder="Deskripsi" onChange={(e) => setForm({ ...form, deskripsi: e.target.value })} />
        <input type="date" onChange={(e) => setForm({ ...form, tanggal: e.target.value })} />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {data.map((laporan) => (
          <li key={laporan.id}>
            {laporan.nama_laporan} - {laporan.tanggal}
            <button onClick={() => handleDelete(laporan.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
