import { FontAwesome } from '@expo/vector-icons';

export default function SingleStar({ filled, size, color, space }) {
  return (
    <FontAwesome name={filled ? "star" : "star-o"} size={size} color={color} style={{ marginHorizontal: space }} />
  )
}