import Layout from "../../components/Gallery";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Gallery from "../../components/Gallery";

export default function ThirdPost( {userName}) {
  return (
    <>
        <Gallery>
        </Gallery>
        <p>my name is  { userName } </p>
    </>

  );
}


//just working on this one page function
//allows you to pass in a parameter  data fetching
ThirdPost.getInitialProps = () => {
  return {
    userName: 'brychxpin'}
  }

