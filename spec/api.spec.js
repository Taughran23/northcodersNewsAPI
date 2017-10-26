process.env.NODE_ENV = 'test';
const {
    expect
} = require('chai');
const request = require('supertest');
const mongoose = require('mongoose');
const server = require('../server');
const saveTestData = require('../seed/test.seed');
mongoose.Promise = global.Promise;

describe('API', function () {
    let usefulData;
    beforeEach(done => {
        mongoose.connection.dropDatabase()
            .then(saveTestData)
            .then(data => {
                usefulData = data;
                console.log(usefulData);
                done();
            })
            .catch(done);
    });
    describe('GET /api/articles', function () {
        it('responds with status code 200', function (done) {
            request(server)
                .get('/api/articles')
                .end((err, res) => {
                    if (err) done(err);
                    else {
                        expect(res.status).to.equal(200);
                        done();
                    }
                });
        });
    });
    it('should respond with an object', (done) => {
        request(server)
            .get('/api/articles')
            .end((err, res) => {
                if (err) done(err);
                else {
                    expect(typeof res.body).to.equal('object');
                    done();
                }
            });
    });
    it('should have an article property that is an array', (done) => {
        request(server)
            .get('/api/articles')
            .end((err, res) => {
                if (err) done(err);
                else {
                    expect(Array.isArray(res.body.articles)).to.equal(true);
                    done();
                }
            });
    });
    describe('GET /api/topics', function () {
        it('responds with status code 200', function (done) {
            request(server)
                .get('/api/topics')
                .end((err, res) => {
                    if (err) done(err);
                    else {
                        expect(res.status).to.equal(200);
                        done();
                    }
                });
        });
        it('should respond with an object', (done) => {
            request(server)
                .get('/api/articles')
                .end((err, res) => {
                    if (err) done(err);
                    else {
                        expect(typeof res.body).to.equal('object');
                        done();
                    }
                });
        });
        it('should have an topics property that is an array', (done) => {
            request(server)
                .get('/api/topics')
                .end((err, res) => {
                    if (err) done(err);
                    else {
                        expect(Array.isArray(res.body.topics)).to.equal(true);
                        done();
                    }
                });
        });
    });
    describe('GET /api/topics/:topic_slug/articles', function () {
        it('responds with status code 200', function (done) {
            request(server)
                .get('/api/topics/football/articles')
                .end((err, res) => {
                    if (err) done(err);
                    else {
                        expect(res.status).to.equal(200);
                        done();
                    }
                });
        });
        it('responds with an object', function (done) {
            request(server)
                .get('/api/topics/football/articles')
                .end((err, res) => {
                    if (err) done(err);
                    else {
                        expect(res.body).to.be.an("object");
                        done();
                    }
                });
        });
        it('should have an articles property that is an array', (done) => {
            request(server)
                .get('/api/topics/football/articles')
                .end((err, res) => {
                    if (err) done(err);
                    else {
                        expect(Array.isArray(res.body.articles)).to.equal(true);
                        done();
                    }
                });
        });
    });
    describe('GET /api/articles/:article_id/comments', function () {
        it('responds with status code 200', function (done) {
            request(server)
                .get(`/api/articles/${usefulData.articles[0]._id}/comments`)
                .end((err, res) => {
                    if (err) done(err);
                    else {
                        expect(res.status).to.equal(200);
                        done();
                    }
                });
        });
        it('responds with an array', function (done) {
            request(server)
                .get(`/api/articles/${usefulData.articles[0]._id}/comments`)
                .end((err, res) => {
                    if (err) done(err);
                    else {
                        expect(Array.isArray(res.body)).to.equal(true);
                        done();
                    }
                });
        });
    });
});