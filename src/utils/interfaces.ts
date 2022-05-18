export interface IComponent {
  index: number;
  handleChangeView: (index: number) => () => void;
}
