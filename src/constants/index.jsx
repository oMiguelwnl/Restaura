import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Pratos", targetId: "pratos" },
  { text: "Sobre", targetId: "sobre" },
  { text: "Missão", targetId: "missao" },
  { text: "Especialidades", targetId: "especialidades" },
  { text: "Avaliações", targetId: "avaliacoes" },
  { text: "Contato", targetId: "contato" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Espaguete Carbonara",
    description: "Massa cremosa com bacon e queijo",
  },
  {
    image: dish2,
    title: "Frango Tikka Masala",
    description: "Curry indiano com frango macio em molho picante",
  },
  {
    image: dish3,
    title: "Salada Caprese",
    description: "Tomates frescos, mozzarella e manjericão com molho balsâmico",
  },
  {
    image: dish4,
    title: "Rolo de Sushi",
    description: "Frutos do mar variados e vegetais enrolados em alga e arroz",
  },
  {
    image: dish5,
    title: "Bolo de Lava de Chocolate",
    description: "Bolo de chocolate decadente com um centro derretido",
  },
  {
    image: dish6,
    title: "Salada Grega",
    description: "Alface crocante, azeitonas, queijo feta e molho ácido",
  },
  {
    image: dish7,
    title: "Pad Thai",
    description: "Macarrão de arroz salteado com camarões, tofu e amendoim",
  },
  {
    image: dish8,
    title: "Pato Pequim",
    description: "Pato crocante com panquecas, pepino e molho hoisin",
  },
  {
    image: dish9,
    title: "Beef Wellington",
    description: "Filé de carne macio envolto em massa com cogumelos e ervas",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description:
      "Sobremesa italiana com camadas de biscoitos embebidos em café e mascarpone",
  },
];

export const ABOUT = {
  header: "Adoramos cozinhar!",
  content:
    "No Restaura, acreditamos que uma boa comida vai além do sabor; ela conta uma história de dedicação e criatividade. Desde as criações exclusivas do nosso chef até o nosso atendimento atencioso, cada detalhe é cuidadosamente planejado para garantir que sua visita seja excepcional. Seja saboreando nosso renomado Beef Wellington ou explorando nosso menu diversificado inspirado em sabores globais, cada prato é uma celebração de sabor e inovação. Junte-se a nós para uma jornada culinária onde cada mordida deixa uma impressão duradoura. Experimente o Restaura onde cada refeição é uma obra-prima.",
};

export const MISSION =
  "No nosso restaurante, nossa missão é criar experiências gastronômicas deliciosas e memoráveis.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italiano",
    description:
      "Experimente os sabores da Itália com nossa requintada culinária italiana, apresentando receitas tradicionais e pratos contemporâneos.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japonês",
    description:
      "Desfrute da arte da excelência culinária japonesa, oferecendo uma fusão de sabores clássicos e modernos.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indiano",
    description:
      "Mergulhe nos sabores ricos e diversos da Índia, com um menu que celebra o patrimônio culinário do país.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Crítico Gastronômico",
  content:
    "“Como crítico gastronômico experiente, minhas expectativas são sempre altas ao entrar em um novo estabelecimento. O Restaura, com seu exterior discreto e interior elegantemente projetado, prometeu uma experiência culinária única desde o momento em que entrei. E devo dizer, entregou além das minhas expectativas.”",
};

export const CONTACT = [
  {
    key: "endereço",
    value: "Endereço: 123 Main Street, Paris, França, 345678",
  },
  { key: "telefone", value: "Telefone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
