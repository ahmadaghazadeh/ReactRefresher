export default function Button({children,...props}){
    return (<button className="px-8 py-2 text-sx md: text-base rounded-md bg-slate-700 text-slate-400 hover:bg-stone-600 hover:text-stone-100" {...props}>{children}</button>);
}