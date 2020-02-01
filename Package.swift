// swift-tools-version:5.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Tholded",
    products: [
        .library(
            name: "Tholded",
            targets: ["Tholded"]),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "Tholded",
            dependencies: []),
        .testTarget(
            name: "TholdedTests",
            dependencies: ["Tholded"]),
    ]
)