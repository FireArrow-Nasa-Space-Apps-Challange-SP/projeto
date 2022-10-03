function Section(props) {
    return (
        <section
            key={props.id || (Math.random() * 100)}
            id={props.id}
        >
            {props.children}
        </section>
    )
}

export default Section