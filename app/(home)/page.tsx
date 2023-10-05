import styles from "./page.module.css";
import {ProductCard} from "@/components/";
import data from "../../data.json"

const {products} = styles;

export default function Home() {
  return (
    <div className="container">
        <div className={products}>
          {data.map(e => <ProductCard key={e.id} {...e}/>)}
        </div>
    </div>
  );
}
