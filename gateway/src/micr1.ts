/* eslint-disable */


export interface HeroById {
  id: number;
}

export interface Hero {
  id: number;
  name: string;
}

export interface Micr1Service {

  FindOne(request: HeroById): Promise<Hero>;

}

