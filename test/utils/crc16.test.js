"use strict";
/* eslint-disable no-undef */

const expect = require("chai").expect;

const crc16 = require("../../utils/crc16");

describe("Modbus CRC16", function() {

    describe("crc16() - calculate checksum", function() {
        it("should calculate a valid checksum", function(done) {
            const buffer = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
            const crc = crc16(buffer);
            expect(crc).to.equal(50227);
            done();
        });

        it("should calculate a valid checksum", function(done) {
            const buffer = Buffer.from("110100130025", "hex");
            const crc = crc16(buffer);
            expect(crc).to.equal(33806);
            done();
        });
    });

});
