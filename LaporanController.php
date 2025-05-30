
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Laporan;

class LaporanController extends Controller
{
    public function index() {
        return Laporan::all();
    }

    public function show($id) {
        return Laporan::findOrFail($id);
    }

    public function store(Request $request) {
        return Laporan::create($request->all());
    }

    public function update(Request $request, $id) {
        $laporan = Laporan::findOrFail($id);
        $laporan->update($request->all());
        return $laporan;
    }

    public function destroy($id) {
        Laporan::destroy($id);
        return response()->json(['message' => 'Deleted']);
    }
}
