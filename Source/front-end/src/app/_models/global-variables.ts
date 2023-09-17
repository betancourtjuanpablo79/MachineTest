export class GlobalVariables
{
  fileName : string;
  public constructor(init?: Partial<GlobalVariables>) {
    Object.assign(this, init);

  }
}

export const Variables = new GlobalVariables;
