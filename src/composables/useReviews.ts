import { computed, ref } from 'vue'

export interface Review {
  id: number
  name: string
  comment: string
  status: boolean
}

const reviews = ref<Review[]>([
  {
    id: 1,
    name: 'Lupita',
    comment: 'Quiero agradecerte de corazón por todo lo que has hecho por mí en este proceso. No solo se nota el gran conocimiento que tienes en ejercicio y alimentación realmente en todo sino también la pasión y el compromiso que tienes. Me haces sentir acompañada, motivada y segura en cada paso que doy. Gracias por tu paciencia, por tus enseñanzas y por impulsarme a ser una mejor versión de mí. De verdad valoro muchisimo tu apoyo',
    status: true,
  },
  {
    id: 2,
    name: 'Areli',
    comment: 'Excelente entrenador y couch. La verdad llevaba años en el gym sin ver resultados . Y desde q entre a tus rutinas y revisiones tengo cambios en mi persona como salud Excelente',
    status: true,
  },
  {
    id: 3,
    name: 'Moises',
    comment: 'Muy buen trabajo super recomendado no abia trabajado con alguien tan profesional y comprometido con sus alumnos',
    status: true,
  },
  {
    id: 4,
    name: 'Anonimo',
    comment: 'Muy bueno bro, la atención que brindas es muy buen Siii eh notado bastantes cambios en mi fisico',
    status: true,
  },
  {
    id: 5,
    name: 'Mathy',
    comment: 'Hola, me parece un buen trabajo, del poco tiempo que llevo contigo he visto muy buenos resultados, rutinas muy buenas y exigentes ..de verdad que estoy muy contenta con tu trabajo.',
    status: false,
  },
  {
    id: 6,
    name: 'Ara',
    comment: 'Estoy bastante satisfecha con el tiempo que llevo tomando asesoría contigo, ha superado por completo mis expectativas en cada uno de mis resultados. En este proceso no solo han habido cambios físicos, sino también personales; me ha convertido en una mujer más segura y ha transformado la forma en la que me percibo a mí misma. Me has hecho ver de todo lo que es capaz mi cuerpo y mi mente; Gracias a ti he aprendido lo que realmente significa la disciplina, la constancia y el compromiso conmigo misma. Sin duda, ha sido una de las mejores decisiones tenerte como mi coach. Tu conocimiento y dedicación está reflejado en cada uno de mis cambios, al punto de que otras mujeres los reconocen y los consideran un referente Gracias por inspirarme día a día y por acompañarme en este proceso, eres grande bro',
    status: true,
  },
  {
    id: 7,
    name: 'Moi',
    comment: 'Es un buen entrenador nos impulsa día a día ser los mejores y saca nuestro potencial',
    status: true,
  },
])

export function useReviews() {
  const activeReviews = computed(() =>
    reviews.value.filter((review) => review.status)
  )

  return { activeReviews }
}
