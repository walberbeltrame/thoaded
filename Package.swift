// swift-tools-version:5.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Molded",
    products: [
        .library(
            name: "Molded",
            targets: ["Molded"]),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "Molded",
            dependencies: []),
        .testTarget(
            name: "MoldedTests",
            dependencies: ["Molded"]),
    ]
)