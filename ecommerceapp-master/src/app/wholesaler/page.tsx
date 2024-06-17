import { data } from "@/lib/data";
import SoloCards from "@/components/categorycardcomponent/page";
import { mostdata } from "@/lib/latest";
import { ProductComp } from "@/components/productcomponent/page";
import { NavButton } from "@/ui/uicategorypills/page";


export default function Wholesale() {
    const datam = data.slice(0, 4)
    const latest = mostdata.slice(0, 7)
    return (
        <>
            <NavButton />
            <SoloCards title="New Latest Arrivals" link="" cards={latest} />
            <SoloCards title="New Selling products" link="" cards={latest} />
            <ProductComp title="Saman for You" link="" products={data} shownavbtn={false} navbtn={true} />

        </>
    )
}