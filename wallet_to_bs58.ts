import bs58 from "bs58";

(async () => {
    const PRIVATE_KEY = "HFcECShAhJb19MdBoKEfNbwCXBC5Vu32V74jvHjGR16Z";

    const decoded = bs58.decode(PRIVATE_KEY);

    console.log(decoded);

    const encoded = bs58.encode(PRIVATE_KEY);

    console.log(encoded);

})();