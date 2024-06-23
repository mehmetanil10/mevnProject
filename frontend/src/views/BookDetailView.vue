<template>
    <section>
        <div class="container">
            <SectionHeader :title="book.name" :text="book.author" />
            <font-awesome-icon icon="arrow-left" size="2xl" class="mb-4" style="cursor: pointer"
                @click="goToBackBooks" />
            <div class="row mb-4">
                <div class="col-lg-6">
                    <img class="card-img-top" src="../../template/images/b1.jpg">
                </div>
                <div class="col-lg-6">
                    <p class="lead description">{{ book.description }}</p>
                    <div class="mb-4">
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Page</strong></div>
                            <div class="col-lg-6">{{ book.page }}</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Category</strong></div>
                            <div class="col-lg-6">Fiction</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Rating</strong></div>
                            <div class="col-lg-6">{{ book.rating }}</div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"><strong>Upload Date</strong></div>
                            <div class="col-lg-6">{{ book.uploadDate }}</div>
                        </div>
                    </div>
                    <div class="comments-section">
                        <h3 display-6 mb-2>Comments</h3>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum?</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold-fst-italic"> John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum?</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold-fst-italic"> John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde odio
                                    numquam odit vero assumenda consequuntur temporibus soluta consequatur! Dolore
                                    ratione reiciendis laborum excepturi, dolores, nesciunt placeat quibusdam fugit eos
                                    nam officia a sapiente exercitationem incidunt commodi voluptate, quis illum ipsam
                                    non dicta tempore quo repellendus. Dignissimos blanditiis quaerat officiis nostrum
                                    voluptas saepe eaque, at, nihil dolorem odit qui quasi doloribus possimus esse
                                    corporis similique architecto eligendi sit aliquam ut laborum? Perspiciatis deleniti
                                    adipisci laudantium debitis sit accusantium eveniet, ipsa iste. Architecto, dolor
                                    praesentium accusantium rem eaque deleniti harum hic placeat inventore soluta
                                    recusandae, facere voluptatem aliquid dolorum corporis in?</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold-fst-italic"> John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum?</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold-fst-italic"> John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum?</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold-fst-italic"> John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon :icon="['far', 'thumbs-up']" />
                                        <p class="ps-2 mb-0"><strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import books from '@/db.js';
export default {
    name: "BookDetailView",
    components: {
        SectionHeader
    },
    data() {
        return {
            books: null
        }
    },
    created() {
        const bookId = this.$route.params.id;
        this.book = books.find(book => book.id === parseInt(bookId))
    },
    methods: {
        goToBackBooks() {
            this.$router.push({ name: "books" })
        }
    }

}
</script>
<style scoped>
.details-wrapper {
    max-height: 740px;
    display: flex;
    flex-direction: column;
}

.comments-section {
    flex-grow: 1;
    overflow-y: auto;
    min-height: 150px;
    max-height: 250px;

}

.description {
    min-height: 150px;
    max-height: 250px;
    overflow-y: auto;
}
</style>