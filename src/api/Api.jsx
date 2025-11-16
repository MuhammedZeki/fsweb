import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
const Api = () => {
  const queryClient = useQueryClient();
  const {
    data: posts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts"); //2 3
      return res.data;
    },
  });
  console.log(posts);
  const { mutate } = useMutation({
    mutationKey: ["posts"],
    mutationFn: async (newPost) => {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      console.log(res.data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Başaryıla post edildi");
      queryClient.invalidateQueries(["posts"]);
    },
    onError: (err) => {
      toast.error("Hata" + err);
    },
  });
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  function handlePost() {
    const obj = {
      userId: Math.floor(Math.random() * 9999), //Paramdan alınıp yollanır veya db'den alıp yollanır
      id: Math.floor(Math.random() * 9999),
      title: "Deneme",
      body: "Deneme content",
    };
    mutate(obj);
  }
  return (
    <div className="flex items-center justify-center w-full">
      <button
        style={{
          padding: "1rem 1.25rem",
        }}
        className="bg-amber-900 text-shadow-indigo-500 rounded-lg cursor-pointer"
        onClick={handlePost}
      >
        Gönder
      </button>
    </div>
  );
};

export default Api;
