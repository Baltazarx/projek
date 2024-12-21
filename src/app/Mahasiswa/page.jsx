import { createClient } from '@/utils/supabase/server';

export default async function Mahasiswa() {
  const supabase = await createClient();
  const { data: Mahasiswa } = await supabase.from("Mahasiswa").select();

  return <pre>{JSON.stringify(Mahasiswa, null, 2)}</pre>
}