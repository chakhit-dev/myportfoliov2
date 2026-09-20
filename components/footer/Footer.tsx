import { Separator } from "../ui/separator";

export default function Footer() {
    return (
        <section className="flex items-center justify-center h-24 border-t bg-neutral-100">
            <div className="flex gap-10 font-semibold text-neutral-500 text-sm">
                <div>Terms & conditions</div>
                <Separator orientation="vertical" className='' />
                <div>Privacy policy</div>
            </div>
        </section>
    )
}
