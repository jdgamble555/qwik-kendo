import { component$ } from "@builder.io/qwik";
import { KendoChart } from "~/integrations/kendo/chart";

export default component$(() => {


    return (
        <>
        <KendoChart client:visible />
        </>        
    );

});