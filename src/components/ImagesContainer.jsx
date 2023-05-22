import React from 'react';

export function ImagesContainer() {
    return (
        <>
            <section className='fade-container cover-img'>
                <h2>Example Using img tags</h2>
                <div className="imagesContainer">
                    <img src='https://images.unsplash.com/photo-1520645521318-f03a712f0e67?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=21f0bd18ed2ebff26ffaae0df3b0d842' alt='' />
                    <img className="fadeInClass" src='https://images.unsplash.com/photo-1530890289114-8385d3901f84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=e8802a19e3c337255fbb47ff6450dd65' alt='' />
                </div>
            </section>
        </>
    );
};
