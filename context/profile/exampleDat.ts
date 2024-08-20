export enum TableEnum {
    PHOTO = "PHOTO",
    SLIDER = "SLIDER",
    DESCRIPTION = "DESCRIPTION",
    TITLE = "TITLE",
  }
  
  export enum DescriptionLayouts {
    TWO_COLUMNS = "TWO_COLUMNS",
    HEADER_WITH_COLUMN = "HEADER_WITH_COLUMN",
    ONE_COLUMN = "ONE_COLUMN",
  }
  
  export interface School {
    name: string;
    faculty: string;
  }
  
  export interface SoftSkill {
    skill: string;
  }
  
  export interface HardSkill {
    skill: string;
  }
  
  export interface TableDescription {
    id:string;
    type: TableEnum.DESCRIPTION;
    layout: DescriptionLayouts;
    header: string;
    header_font_size: number;
    text: string;
    text_column1: string;
    text_column2: string;
    text_font_size: number;
  }
  
  export interface TablePhoto {
    id:string;
    type: TableEnum.PHOTO;
    path: string;
    borderRadius: number;
    width: number;
    brightness: number;
  }
  
  export interface TableTitle {
    id:string;
    type: TableEnum.TITLE;
    text: string;
    fontColor: string;
    bgColor: string;
    fontSize: string;
  }
  
  export interface TableSlider {
    id:string;
    type: TableEnum.SLIDER;
    pathTable: string[];
    ability_to_scroll: boolean;
    auto_scroll: number | null;
    numeric_nav: boolean;
    swiper: boolean;
  }
  
  export type TableEntry = TableDescription | TablePhoto | TableTitle | TableSlider;
  
  export interface ExDataProf {
    profilePhoto: string;
    bgPhoto: string;
    f_name: string;
    l_name: string;
    data: Date;
    description: string;
    schools: School[];
    soft: string[];
    hard: string[];
    table: TableEntry[];
  }
  
  export const exDataProf: ExDataProf = {
    profilePhoto: "examplePath",
    bgPhoto: "exampleBGPath",
    f_name: "Kamil",
    l_name: "Lewiński",
    data: new Date("04.10.1998"),
    description: `Z wielką przyjemnością zgłaszam swoją kandydaturę na stanowisko handlowca w [Nazwa Firmy], odpowiadając na ogłoszenie zamieszczone na [gdzie znalazłeś ogłoszenie]. Jestem przekonany, że moje umiejętności i doświadczenie idealnie wpisują się w potrzeby Państwa zespołu.
  
  Posiadam [liczba] lat doświadczenia w sprzedaży, zarówno w pracy bezpośredniej z klientem, jak i w zarządzaniu relacjami biznesowymi na wyższym szczeblu. Moje dotychczasowe doświadczenie zawodowe obejmuje pracę w [branża lub sektor], gdzie z sukcesem rozwijałem sieć kontaktów oraz zwiększałem sprzedaż dzięki efektywnym strategiom marketingowym i negocjacyjnym.`,
    schools: [
      {
        name: "Politechnika Poznańska",
        faculty: "Informatyka",
      },
    ],
    soft: ["skill"],
    hard: ["skill"],
    table: [
      {
        id: '234',
        type: TableEnum.DESCRIPTION,
        layout: DescriptionLayouts.HEADER_WITH_COLUMN,
        header: "Jak to sie zaczęło",
        header_font_size: 22,
        text: `Od najmłodszych lat Maria była zafascynowana technologią. Jej pierwsze wspomnienia związane z komputerami to wspólne gry z rodzeństwem na starym, skrzypiącym komputerze, który rodzice kupili w czasie, gdy to jeszcze było rzadkością. Dla Marii komputer był magicznym pudełkiem, które mogło wszystko – od wyświetlania kolorowych obrazków po grę w niesamowite gry.`,
        text_font_size: 0,
        text_column1:'',
        text_column2:''
      },
      {
        id: '235',

        type: TableEnum.PHOTO,
        path: "examplePath",
        borderRadius: 21,
        width: 100,
        brightness: 50,
      },
      {
        id: '224',
        type: TableEnum.TITLE,
        text: "Zajefajny slider na dole",
        fontColor: "#235422",
        bgColor: "#23e421",
        fontSize: "23",
      },
      {
        id: '134',
        type: TableEnum.SLIDER,
        pathTable: ["path1", "path2", "path3", "path4"],
        ability_to_scroll: true,
        auto_scroll: 2,
        numeric_nav: true,
        swiper: true,
      },
    ],
  };
  