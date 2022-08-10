export interface Link{

  title : string;
  url? : string;
  selected? : boolean;
  isChildrenVisible? : boolean;
  children?: Link[];
}
