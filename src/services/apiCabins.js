import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}


export async function createEditCabin(newCabin) {
  console.log(newCabin)
  const { id, ...cabinData } = newCabin;

  const hasImagePath = cabinData.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${cabinData.image.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? cabinData.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  if (id) {
    // EDIT
    query = query.update({ ...cabinData, image: imagePath }).eq("id", id);
  } else {
    // CREATE
    query = query.insert([{ ...cabinData, image: imagePath }]);
  }

  const { data, error } = await query.select().single();
  if (error) throw new Error(error.message);

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabinData.image);

    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      throw new Error("Cabin image could not be uploaded and the cabin was not created");
    }
  }

  return data;
}


export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
