export default interface IMenuItem {
  id: number;
  order: number;
  parent: number;
  title: string;
  url: string;
  attr: string;
  target: string;
  classes: string;
  xfn: string;
  description: string;
  object_id: number;
  object: string;
  object_slug: string;
  type: string;
  type_label: string;
}
