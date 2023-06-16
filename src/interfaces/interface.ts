export interface Journey {
    type: string,
    name: string,
    title: string | null,
    date: string,
    dateNumb: number[],
    img: string | null,
    desc: string | null,
    smallDesc: string,
    techUsed: string[] | null,
    projectLink: string | null,
    codeLink: string | null,
    docLink: string | null,
  }