import { IconType } from "react-icons"

interface CategoryProps{
    label: string,
    icon: IconType,
    selected? : boolean
}
const Category:React.FC<CategoryProps> = ({label, icon,selected}) => {
  return (
    <div>Category</div>
  )
}

export default Category