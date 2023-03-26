import axios from "axios";

// Belirtilen kullanıcıya ait kullanıcı bilgilerini çeker.
async function getData(userId) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

// Belirtilen kullanıcıya ait postları çeker.
  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );

// Spread opretarörü kullanılarak kullanıcı bilgileri ve postları birleştiriliyor.
  return {
    ...user,
    posts: post,
  };
}

export default getData;
