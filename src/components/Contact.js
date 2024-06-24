const Contact = ()=>{
    return (
        <div><h1> This is contact page </h1>
            <form>
            <input type="text"  className="border border-black p-2 m-2" placeholder="Name"/>
            <input type="text" className="border border-black p-2 m-2" placeholder="Meassage" />
            <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">SubMit</button>
            </form>
        </div>
     );
};
export default Contact;