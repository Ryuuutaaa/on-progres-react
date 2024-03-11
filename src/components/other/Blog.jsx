import { useRef } from "react";

const Blog = () => {
  const linkRef = useRef(null);

  const goto = (ref) => {
    console.log(ref);
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button onClick={() => goto(linkRef.current)}>
        <h1>CLICK MEEE</h1>
      </button>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        praesentium ipsam mollitia. Illum vero, sequi adipisci numquam doloribus
        maiores, distinctio quia natus unde saepe, quidem odio. Repudiandae
        quasi accusantium fuga voluptatum eos cum, ducimus eligendi vitae
        impedit exercitationem, consectetur ab id iure sed vel? Maxime fugiat
        alias atque. Reiciendis, blanditiis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        praesentium ipsam mollitia. Illum vero, sequi adipisci numquam doloribus
        maiores, distinctio quia natus unde saepe, quidem odio. Repudiandae
        quasi accusantium fuga voluptatum eos cum, ducimus eligendi vitae
        impedit exercitationem, consectetur ab id iure sed vel? Maxime fugiat
        alias atque. Reiciendis, blanditiis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        praesentium ipsam mollitia. Illum vero, sequi adipisci numquam doloribus
        maiores, distinctio quia natus unde saepe, quidem odio. Repudiandae
        quasi accusantium fuga voluptatum eos cum, ducimus eligendi vitae
        impedit exercitationem, consectetur ab id iure sed vel? Maxime fugiat
        alias atque. Reiciendis, blanditiis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        praesentium ipsam mollitia. Illum vero, sequi adipisci numquam doloribus
        maiores, distinctio quia natus unde saepe, quidem odio. Repudiandae
        quasi accusantium fuga voluptatum eos cum, ducimus eligendi vitae
        impedit exercitationem, consectetur ab id iure sed vel? Maxime fugiat
        alias atque. Reiciendis, blanditiis?
      </p>
      <h1 ref={linkRef}>HAAIIIII</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        praesentium ipsam mollitia. Illum vero, sequi adipisci numquam doloribus
        maiores, distinctio quia natus unde saepe, quidem odio. Repudiandae
        quasi accusantium fuga voluptatum eos cum, ducimus eligendi vitae
        impedit exercitationem, consectetur ab id iure sed vel? Maxime fugiat
        alias atque. Reiciendis, blanditiis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        praesentium ipsam mollitia. Illum vero, sequi adipisci numquam doloribus
        maiores, distinctio quia natus unde saepe, quidem odio. Repudiandae
        quasi accusantium fuga voluptatum eos cum, ducimus eligendi vitae
        impedit exercitationem, consectetur ab id iure sed vel? Maxime fugiat
        alias atque. Reiciendis, blanditiis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        praesentium ipsam mollitia. Illum vero, sequi adipisci numquam doloribus
        maiores, distinctio quia natus unde saepe, quidem odio. Repudiandae
        quasi accusantium fuga voluptatum eos cum, ducimus eligendi vitae
        impedit exercitationem, consectetur ab id iure sed vel? Maxime fugiat
        alias atque. Reiciendis, blanditiis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        praesentium ipsam mollitia. Illum vero, sequi adipisci numquam doloribus
        maiores, distinctio quia natus unde saepe, quidem odio. Repudiandae
        quasi accusantium fuga voluptatum eos cum, ducimus eligendi vitae
        impedit exercitationem, consectetur ab id iure sed vel? Maxime fugiat
        alias atque. Reiciendis, blanditiis?
      </p>
    </div>
  );
};

export default Blog;
