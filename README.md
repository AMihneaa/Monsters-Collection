  Acesta este un proiect realizat in urma tutorialului de pe Udemy numit si "Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)"

  Scopul cursului este de a invata mai bine GraphQL si de a umple anumite lipsuri, daca exista, in procesul de utilizare a librariei React Js.

  Acest proiect este primul din lista, pe care cursul il are de oferit. Cursul incorporeaza la inceput conceptele Componentelor Clasa, concept complet diferit, din punct de vedere a scrierii de cod, fata de cel a Componentelor Functie. Pe parcursul etapelor de dezvoltare a Componentelor Clasa, in curs se dezvolta toate informatiile necesare scrierii de cod pentru acestea, punand accent foarte mult pe ideea de render si re-render pe care o explica amanuntit in decursul a cateva videoclip-uri bune.
Acestea sunt explicate prin utilizarea metodelor exentiale precum: Constructor(), componentDidMount(), Render(). Ordinea acestora in urma procesului de render fiind : Constructor() -> Render() -> componentDidMount() -> Render().
  * Constructorul este utilizat pentru a initia state-uri, care sunt modificate ulterior < fortand componenta sa-si de re-render daca aceste sunt vazute ca un obiect diferit in memorie > in urma adaugarii unor functionalitati la nivelul aplicatiei.
  * componentDidMount() este folosit pentru a initia proceduri in top-ul componentelor, procese precum cel de fetch la API-uri.
  * Render este pentru a incorpora toata logica aplicatiai si functionalitatea acesteia, iar prin metoda return aceasta afiseaza UI-ul scris, prin componente create sau prin simple tag-uri HTML.

  Ulterior, in cadrul acestui curs se modifica Componentele Clasa cu Componente Functie (am incercat sa pastrez si o buna parte din acestea pentru a se vedea diferentele). Componentele Functie incorporeaza alta logica precum cele Clasa si se scriu diferit din punct de vedere a sintaxei. Componenta Functie inlocuieste Constructor() cu useState Hook, componentDidMount() cu useEffect  Hook, iar Render() -> return () cu  un simplu return () . Astfel dispare keyword-ul 'this', ne mai fiind necesar, iar props le vom scrie ca arr destructuring de argumente in Componenta.

  Link-ul catre curs: https://www.udemy.com/course/complete-react-developer-zero-to-mastery/
